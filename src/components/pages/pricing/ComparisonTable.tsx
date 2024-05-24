import React from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';

function ComparisonTable() {
  return (
    <div className='mx-8 max-w-[1500px] xl:mx-auto'>
      <h2 className='tracing-[4.17px] text-center text-4xl font-bold'>
        COMPARE
      </h2>
      <div className='my-16'>
        <table
          className='w-full table-auto '
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          <thead className=''>
            <tr>
              <th className='border-b-[1px] border-black py-4 text-start text-sm'>
                THE FEATURES
              </th>
              <th className='border-b-[1px] border-black py-4'>BASIC</th>
              <th className='border-b-[1px] border-black py-4'>PRO</th>
              <th className='border-b-[1px] border-black py-4'>BUSINESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                UNLIMITED STORY POSTING
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                UNLIMITED PHOTO UPLOAD
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                EMBEDDING CUSTOM CONTENT
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                CUSTOMIZE METADATA
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                ADVANCED METRICS
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                PHOTO DOWNLOADS
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                SEARCH ENGINE INDEXING
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
            <tr>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 text-sm font-semibold tracking-[2px]'>
                CUSTOM ANALYTICS
              </td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'></td>
              <td className='border-b-[1px] border-[#DFDFDF] py-4 font-semibold tracking-[2px]'>
                <CheckIcon className='mx-auto h-5 w-5' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
